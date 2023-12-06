import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  email : string = "";
  password : string = "";
  alertController: any;
  loginForm: any;
  utilisateurService: any;
  authService: any;

  constructor(private router: Router,private http : HttpClient) {}
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.email.length<=0 || this.password.length<=0){
      alert("Veuillez remplir les champs");
      return;
    }

    this.http.get("http://localhost:8080/utilisateur/login?email="+this.email+"&motDePasse="+this.password).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/tab1']);
    })

  }

}
