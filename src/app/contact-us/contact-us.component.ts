import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from '../total-systems/cartService/cart.services'; // Correct path to the service

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit() {
    const interestedProducts = this.cartService.getProducts().join(', ');
    const textarea = document.getElementById('interestedProducts') as HTMLTextAreaElement;
    textarea.value = interestedProducts;
  }

  name: string = '';
  email: string = '';
  desc: string = '';
  resultText: string = '';

  submitToAPI(event: Event) {
    event.preventDefault();

    if (!this.name || !this.email || !this.desc) {
      alert("Please Fill All Required Fields");
      return;
    }

    const nameRE = /^([a-zA-Z]{2,16})$/;
    if (!nameRE.test(this.name)) {
      alert("Name entered is not valid");
      return;
    }

    const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRE.test(this.email)) {
      alert("Email Address entered is not valid");
      return;
    }

    const data = {
      name: this.name,
      email: this.email,
      desc: this.desc
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('https://7v5jcr8tah.execute-api.ap-south-1.amazonaws.com/nfpaemailstage/nfpaemailresource', JSON.stringify(data), { headers })
      .subscribe(
        (response: any) => {
          console.log('successful');
          this.resultText = "Thank you for Contacting Me\nOur team will contact you soon!";
          alert(this.resultText);
        },
        (error: any) => {
          console.log('failed');
        }
      );
  }
}
