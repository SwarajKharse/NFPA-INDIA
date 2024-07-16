import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TotalSystemsComponent } from './total-systems/total-systems.component';
import { ServicesRedirectComponent } from './total-systems/amc/services-redirect.component';
import { FireAuditComponent } from './total-systems/fire-audit/fire-audit.component';
import { FireDetectionSystemComponent } from './total-systems/fire-detection-system/fire-detection-system.component';
import { FireExtinguisherRefillingComponent } from './total-systems/fire-extinguisher-refilling/fire-extinguisher-refilling.component';
import { FireHydrantSystemComponent } from './total-systems/fire-hydrant-system/fire-hydrant-system.component';
import { FireSprinklerSystemComponent } from './total-systems/fire-sprinkler-system/fire-sprinkler-system.component';
import { FireSuppressionSystemComponent } from './total-systems/fire-suppression-system/fire-suppression-system.component';
import { ConsultingComponent } from './total-systems/consulting/consulting.component';
import { LicensingComponent } from './total-systems/licensing/licensing.component';
import { RepairComponent } from './total-systems/repair/repair.component';
import { MainComponent } from './total-systems/main/main.component';
import { TrainingComponent } from './total-systems/training/training.component';
import { IndustriesComponent } from './total-solutions/industries/industries.component';
import { CommercialBuildingsComponent } from './total-solutions/commercial-buildings/commercial-buildings.component';
import { DataCentersComponent } from './total-solutions/data-centers/data-centers.component';
import { HospitalsComponent } from './total-solutions/hospitals/hospitals.component';
import { HotelsComponent } from './total-solutions/hotels/hotels.component';
import { MuseumsComponent } from './total-solutions/museums/museums.component';
import { ResidentialBuildingsComponent } from './total-solutions/residential-buildings/residential-buildings.component';
import { RestaurantsComponent } from './total-solutions/restaurants/restaurants.component';
import { SchoolsComponent } from './total-solutions/schools/schools.component';
import { ArchitectInteriorComponent } from './total-solutions/architect-interior/architect-interior.component';
import { FireExComponent } from './total-systems/fire-ex/fire-ex.component';
import { FireSignComponent } from './total-systems/fire-sign/fire-sign.component';
import { PublicAddressComponent } from './total-systems/public-address/public-address.component';
import { FireDoorComponent } from './total-systems/fire-door/fire-door.component';
import { TotalSolutionsComponent } from './total-solutions/total-solutions.component';
import { ParentComponent } from './total-solutions/parent/parent.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClientsComponent } from './clients/clients.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    {path: 'about',component: AboutUsPageComponent},
    {
        path: 'total-systems',
        component: TotalSystemsComponent,
        children: [
          { path: '', redirectTo: 'main', pathMatch: 'full' }, // Default route
          { path: 'main', component: MainComponent},
          { path: 'AMC', component: ServicesRedirectComponent },
          { path: 'Audit', component: FireAuditComponent },
          { path: 'Refill', component: FireExtinguisherRefillingComponent },
          { path: 'Detection-System', component: FireDetectionSystemComponent },
          { path: 'Hydrant-System', component: FireHydrantSystemComponent },
          { path: 'Sprinkler-System', component: FireSprinklerSystemComponent },
          { path: 'Suppression-System', component: FireSuppressionSystemComponent },
          { path: 'consulting', component: ConsultingComponent},
          { path: 'Licensing', component: LicensingComponent },
          { path: 'Training', component: TrainingComponent },
          { path: 'Repair', component: RepairComponent},
          { path: 'Extinguishers', component: FireExComponent},
          { path: 'Signs', component: FireSignComponent},
          { path: 'PA', component: PublicAddressComponent},
          { path: 'Doors', component: FireDoorComponent},
          { path: '**', component: NotFoundPageComponent },
        ],
      },
      { path: 'total-solutions', component: TotalSolutionsComponent,
        children: [
          { path: '', redirectTo: 'parent', pathMatch: 'full' },
          { path: 'parent', component: ParentComponent},
          { path: 'Industries', component: IndustriesComponent },
          { path: 'Commercials', component: CommercialBuildingsComponent },
          { path: 'DataCentres', component: DataCentersComponent },
          { path: 'Hospitals', component: HospitalsComponent },
          { path: 'Hotels', component: HotelsComponent },
          { path: 'Museums', component: MuseumsComponent },
          { path: 'Residentials', component: ResidentialBuildingsComponent },
          { path: 'Restaurants', component: RestaurantsComponent },
          { path: 'Schools', component: SchoolsComponent },
          { path: 'Architects', component: ArchitectInteriorComponent },
          { path: '**', component: NotFoundPageComponent },
        ]
      },  
      { path: 'contact', component: ContactUsComponent },
      { path: 'clients', component: ClientsComponent},
      { path: 'solutions', component: TotalSystemsComponent },
      { path: '**', component: NotFoundPageComponent}
];