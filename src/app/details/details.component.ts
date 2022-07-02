import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public respuesta: any;
  constructor(private route:ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any)=>{
      const {params} =paramMap


      this.caragarData(params.id)
    })
  }

  caragarData(id:string){
    this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .subscribe(respuesta=>{
      this.respuesta=respuesta;

    })
  }

}
