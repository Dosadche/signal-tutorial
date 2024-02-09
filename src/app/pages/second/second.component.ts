import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { VehiclesService } from '../../vehicles.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondComponent {
  vehiclesService = inject(VehiclesService);
  vehicles = this.vehiclesService.getVehicles();
  selectedVehicle = signal<any | undefined>(undefined);
  loading = signal(false);
  moreThen1000 = computed(() => {
    return this.selectedVehicle().mileage >= 2000;
  });

  getVehicle(id: number): void {
    this.selectedVehicle.set(undefined);
    this.loading.set(true);
    this.vehiclesService.getVehicleById(id)
    .pipe(take(1))
    .subscribe((vehicle) => {
      this.loading.set(false);
      this.selectedVehicle.set(vehicle);
    });
  }
}
