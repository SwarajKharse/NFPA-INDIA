import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentData } from '@angular/fire/firestore';
import { Observable, Subject, catchError, of } from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ServicesRedirectComponent } from '../amc/services-redirect.component';
import { FireAuditComponent } from '../fire-audit/fire-audit.component';
import { FireDetectionSystemComponent } from '../fire-detection-system/fire-detection-system.component';
import { FireExtinguisherRefillingComponent } from '../fire-extinguisher-refilling/fire-extinguisher-refilling.component';
import { FireHydrantSystemComponent } from '../fire-hydrant-system/fire-hydrant-system.component';
import { FireSprinklerSystemComponent } from '../fire-sprinkler-system/fire-sprinkler-system.component';
import { FireSuppressionSystemComponent } from '../fire-suppression-system/fire-suppression-system.component';
import { HydraulicPressureTestingComponent } from '../hydraulic-pressure-testing/hydraulic-pressure-testing.component';
import { LicensingComponent } from '../licensing/licensing.component';
import { RepairComponent } from '../repair/repair.component';
import { TrainingComponent } from '../training/training.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ServicesRedirectComponent, FireAuditComponent, FireDetectionSystemComponent, FireExtinguisherRefillingComponent, FireHydrantSystemComponent, FireSprinklerSystemComponent, FireSuppressionSystemComponent, HydraulicPressureTestingComponent, LicensingComponent, RepairComponent, TrainingComponent, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  @ViewChild('systemsSection') systemsSection!: ElementRef;
  @ViewChild('productsSection') productsSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;

  ids1: string[] = [];
  type1: string = "systems";

  ids2: string[] = [];
  type2: string = "products";
  nativeElement: any;

  ids3: string[] = [];
  type3: string = "services";

  @Input() id!: string;
  @Input() type!: string;
  ids: DocumentData[] = [];
  product$: Observable<DocumentData> | undefined;
  
  searchTerm: string = '';
  suggestions: any[] = [];
  allProducts: any[] = [];
  searchTerm$ = new Subject<string>();

  showExploreMore: boolean[] = [false, false, false, false];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
    this.loadProducts();
    this.resetSearchTerm(); // Reset search term on component initialization
    this.searchTerm$
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map(searchTerm => searchTerm.toLowerCase()),
        map(searchTerm => this.filterProducts(searchTerm))
      )
      .subscribe(suggestions => {
        this.suggestions = suggestions;
      });
  }



  scrollToSystems() {
    this.systemsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProducts() {
    this.productsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServices() {
    this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  loadProducts(): void {
    this.http.get<any[]>('assets/suggestionsFile.json')
      .pipe(
        catchError(error => {
          console.error('Error loading products', error);
          return of([]);
        })
      )
      .subscribe(data => {
        this.allProducts = data;
      });
  }

  filterProducts(searchTerm: string): any[] {
    if (searchTerm === '') {
      return [];
    }
    return this.allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
  }

  onSearchTermChanged(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm$.next(inputElement.value);
  }

  resetSearchTerm(): void {
    this.searchTerm = '';
  }

  toggleExploreMore(index: number) {
    this.showExploreMore[index] = !this.showExploreMore[index];
    setTimeout(() => {
      this.showExploreMore[index] = false;
    }, 3000);
  }

  }
  

