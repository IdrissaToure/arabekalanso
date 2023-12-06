import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  //ici on implement pour recupere le donnee de html
  nom : string = "";
  prenom : string = "";
  email : string = "";
  motDePasse : string = "";
  confirmer : string = "";

  constructor(private router: Router,private http : HttpClient) { }

  ngOnInit() {
  }
  //ici ce pour gere le donnee d'inscription
  onSubmit(){
    if(this.email.length<=0 || this.motDePasse.length<=0 || this.nom.length<=0 || this.prenom.length<=0
      || this.confirmer.length<=0){
      alert("Veuillez remplir les champs");
      return;
    }
  //condition pour que la connection soit fonctione
    if(this.motDePasse != this.confirmer){
      //ici ce pour afficher si le bon mdp et entre
      alert("Vos mot de passes ne sont pas identique");
      return;
    }
     //ici ce lien de mon base de donnee
    this.http.post("http://localhost:8080/utilisateur/add",{
      //les constructaire
      "nom" : this.nom,
      "prenom" : this.prenom,
      "email" : this.email,
      "motDePasse" : this.motDePasse
    }).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/tab1']);
    })

  }

}
