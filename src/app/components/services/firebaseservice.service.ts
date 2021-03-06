import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { Users } from '../models/usermodel';
import { AddHospital } from '../models/addhospital';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PharmacyModel } from '../models/PharmacyModel';
import { AppointmentModel } from '../models/AppointmentModel';
import { ManageHospModel } from '../models/ManageHospModel';
import { AngularFireStorage } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  isLoggedIn = false
  uid: any = null

  user: any = []
  id: any;

  hospitals: any = []
  hospitalManage: any = []

  appointments: AppointmentModel[]

  pharmacy: any = []
  users: any = []

  constructor(public firebaseAuth: AngularFireAuth, public firebaseFirestore: AngularFirestore,private toastr: ToastrService,
    private router: Router, private firebaseStorage: AngularFireStorage) { 
  }

  async checkHospitalOrNormalUser(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      let uid = res.user.uid
      this.firebaseFirestore.collection("hospitals").doc(uid).ref.get().then(res => {
        if(res.exists) {
          console.log(res)
          this.router.navigateByUrl("/hospitalHome")
        } else {
          console.log("try another way")
          this.signOut()
          this.signIn(email, password)
        }
      }
      )
    })
  }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      if(res.user.emailVerified !== true) {
        this.toastMessageFaild("Please verify your mail first!","Email Verification")
      } else {
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
      this.router.navigateByUrl('/home')
    }
    })
  }

  async signUp(email: string, password: string, users: any) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      res.user.sendEmailVerification();
      console.log("Email verification sent")
      this.router.navigateByUrl('/login')
      this.toastMessage("Email verification mail sent!", "Email verification")
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user));
      this.storeUsersDetails(res.user.uid, users)
    })
  }

  async signUpHospital(email: string, password: string, hospital: ManageHospModel, imagePath) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      this.storeHospitalDetails(res.user.uid, hospital, imagePath)
    })
  }

  storeHospitalDetails(id: string, hospital: ManageHospModel, imagePath) {
    return this.firebaseFirestore.collection("hospitals")
    .doc(id)
    .set(hospital).then(res => 
      {
        // this.router.navigateByUrl('/hospitalHome')
        this.storeImage(imagePath, id)
      }
      )
  }

  getAllAppointments(id: string) {
    // return this.firebaseFirestore.collection("hospitals").doc(id).collection("appointments").valueChanges()
    return this.firebaseFirestore.collection("hospitals").doc(id).collection("appointments").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as any;
        return { id, ...data }; 
      }))
    );
  }

  storeImage(image, id) {
    var date = Date.now();
    const imagePath = `HospitalsImage/${id}/IMG${date}`
    const imageRef = this.firebaseStorage.ref(imagePath)
    this.firebaseStorage.upload(imagePath, image).then(res => {
      imageRef.getDownloadURL().subscribe(res => {
        let newData = {
          imagePath: imagePath,
          imageUrl: res
        }
        this.router.navigateByUrl('/hospitalHome')
        this.toastMessage("Successfully Registered","Registration")
        this.firebaseFirestore.collection("hospitals").doc(id).update(
          newData
        )
      })
    })
  }

  async addPharmacyIntoHospital(pharmacy, hospId) {
    await this.firebaseFirestore.collection("hospitals").doc(hospId)
    .collection("pharmacy").add(pharmacy)
    .then(res => {
      console.log('added')
    })
  }

  signOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  storeUsersDetails(id: string, users: any) {
    return this.firebaseFirestore.collection("users").doc(id).set(users)
  }
  
  getUserDetails(id: string) {
    this.users = this.firebaseFirestore.collection("users").doc(id).valueChanges()
    return this.users;
  }

  addHospitalDetails(hospitals: AddHospital) {
    return this.firebaseFirestore.collection("hospitals").add(hospitals);
  }

  addPharmacyDetails(pharmacy: PharmacyModel) {
    return this.firebaseFirestore.collection("pharmacy").add(pharmacy);
  }

  getHospitals() {
    // return this.hospitals;
    return this.firebaseFirestore.collection("hospitals").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as any;
        return { id, ...data }; 
      }))
    );
  }

  async getHospitalsForSelect() {
    return await this.firebaseFirestore.collection("hospitals").get().pipe(
      map(actions => actions.docs.map(a => {
        const data = a.data() as any;
        const id = a.id;
        return { id, ...data };
      }))
    )
  }

  getSpecificHospitals(id: string) {
    this.hospitals = this.firebaseFirestore.collection("hospitals").doc(id).valueChanges()
    return this.hospitals;
  }

  getSpecificManegedHospital(uid: any) {
      this.hospitalManage = this.firebaseFirestore.collection("hospitals").doc(uid).valueChanges()
      return this.hospitalManage;
  }

  updateSpecificHospital(hospitals, id) {
    return this.firebaseFirestore.collection("hospitals").doc(id).set(hospitals).then(res => {
    this.toastMessage("Successfully Updated", "Hospital Updation")
  }
  )
}


async updateImage(image: any, id: string, hospitals: ManageHospModel) {
this.firebaseFirestore.collection("hospitals").doc(id).get().pipe(
  map(a => {
    const data = a.data() as any;
    const oldImagePath = data.imagePath
    return oldImagePath
  })
).subscribe(res => {
  const imagePath = res
  const imageRef = this.firebaseStorage.ref(imagePath)
  this.firebaseStorage.upload(imagePath, image).then(res => {
    imageRef.getDownloadURL().subscribe(res => {
      let newData = {
        imagePath: imagePath,
        imageUrl: res
      }
      this.firebaseFirestore.collection("hospitals").doc(id).update(
        newData
      ).then(res => {
        this.firebaseFirestore.collection("hospitals").doc(id).update(
          hospitals
        ).then(res => alert("Successfully Updated"))
      })
    })
  })
})
}

  getPharmacy() {
    return this.firebaseFirestore.collection("pharmacy").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  async addAppontmentToSpecificHospital(appointments: AppointmentModel, hospId: any) {
    await this.firebaseFirestore.collection("hospitals").doc(hospId)
    .collection("appointments").add(appointments)
    .then(res => {
      console.log('added')
    })
  }

  getSpecificPharmacy(id: string) {
    this.pharmacy = this.firebaseFirestore.collection("pharmacy").doc(id).valueChanges()
    return this.pharmacy;
  }

  toastMessage(textMessage: string, textTitle: string) {
    this.toastr.success(textMessage, textTitle);
  }

  toastMessageFaild(textMessage: string, textTitle: string) {
    this.toastr.info(textMessage, textTitle);
  }

  updateSpecificUser(user: Users, id: string) {
    return this.firebaseFirestore.collection("users").doc(id).set(user).then(res => {
      this.toastMessage("Successfully Updated", "UserDetails Updation")
    })
  }

}
