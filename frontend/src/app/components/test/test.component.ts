import { Subscriber } from 'rxjs';
import { IotService } from './../../service/iot.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsernameValidator } from 'src/app/username.validator';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from 'src/app/MustMatch';
import { HttpEventType } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { Iot } from 'src/app/models/iot';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {


  public sidebarShow: boolean = false;

  currentUser: any = {};

  signupForm: FormGroup;
  submitted=false;
  check= false;
  verifPass:any = true;
  preview!: string;
  percentDone?: any = 0;
  errMsg: any;
  show:boolean = false; nbrActifs!:number
  allumer:boolean = false;
  dataiot: any;
  temperature: any;
  humidite: any;
  affich!:any; // pour recuperer et affciher température et humidité

/*   today= new Date();
  jstoday = ''; */




  constructor(public formBuilder: FormBuilder,
              public authService: AuthService,
              private actRoute: ActivatedRoute,
              public router: Router,
              private IotService: IotService
  ) {
   // this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');

    //Recuperer les informations de l'utilisateur
    // let id = this.actRoute.snapshot.paramMap.get('id');
    let id = localStorage.getItem('id')?.replaceAll('"', '');
    this.authService.getUserProfile(id).subscribe((res) => {
    this.currentUser = res.msg;
    });
    //Crontôle de saisie du formulaire
    this.signupForm = this.formBuilder.group({
        prenom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
        nom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
        email:['',[Validators.required,Validators.email]],
        role:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(8)]],
        passwordConfirm: ['', Validators.required],
        etat:[0, Validators.required],
        imageUrl:[""],
        matricule: ['']
    },  { validator: MustMatch('password', 'passwordConfirm')}
  )}

  listDeroulant=['Administrateur','Utilisateur'];

  ngOnInit():void {
    // coté iot
    this.IotService.iot().subscribe((data) => {
      console.log(data);
      this.affich=data // COTÉ REALTIME
     })

     //coté tableau journalier

/* this.IotService.getIot().subscribe(
  (  th: any)=>{
    console.log(th);
    this.jour=th as any as Iot[];
    const data = this.jour.filter((recup:any)=>recup.Heure =='08:00:00'||recup.Heure =='12:00:00'||recup.Heure== '19:00:00' )
    this.temperature=[{Temperature : {"8H": data[0].temperature, "12": data[1].temperature,"8H00": data[2].temperature}},
    //Humidité: { "8H": data[0].humidite, "12": data[1].humidite, "8H00": data[2].humidite }},
    console.log(this.temperature)
   ]

  }
) */


  }

  // Fonction pour télécharger l'mage
  uploadFile(event: any) {

    const file = event.target.files[0];
    this.signupForm.patchValue({
      imageUrl: file,
    });
    this.signupForm.get('imageUrl')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  public afficher():void{
    this.show = true
  }

  public afficher1():void{
    this.show = false
  }
//Fonction pour l'inscription
  registerUser() {
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }
    this.submitted=false
    //générer matricule pour administrateur et utilisateur
    let matriculeGenerate;
    this.signupForm.value.role =="Administrateur" ? matriculeGenerate= "MAT"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1))
      :matriculeGenerate= "MUT"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1));
      this.signupForm.controls.matricule.setValue(matriculeGenerate)

    this.authService.signUp(this.signupForm.value.prenom, this.signupForm.value.nom,
      this.signupForm.value.email, this.signupForm.value.role, this.signupForm.value.password,
      this.signupForm.value.etat,this.signupForm.value.imageUrl,this.signupForm.value.matricule).subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Requete éxecutée!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            this.percentDone = false;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Inscription réussi !',
              showConfirmButton: false,
              timer: 1500
            });window.setTimeout(function(){location.reload()},1000)
             break;
        }
    } , // Intercepter les messages d'erreurs du serveur
    error => {
      this.errMsg = error.error.error
      console.log(this.errMsg)
    });


    }

    allumerVent(){

      this.allumer ? this.allumer = false: this.allumer = true

    }




}
