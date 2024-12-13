import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Shardul } from '../shardul';
import { ShardulService } from '../shardul.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'PRODUCT_ID', 'PRODUCT_NAME', 'CATEGORY_ID', 'CATEGORY_NAME', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Shardul>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  shardul: Shardul = {
    id: 0,
    PRODUCT_ID: '',
    PRODUCT_NAME: '',
    CATEGORY_ID: '',
    CATEGORY_NAME: ''
  };
  sharduls: Shardul[] = [];

  constructor(private shardulService: ShardulService) {}

  ngAfterViewInit(): void {
    this.loadCandidates();
  }

  loadCandidates() {
    this.shardulService.fetchAllCandidates().subscribe((data) => {
      this.sharduls = data;
      this.dataSource = new MatTableDataSource<Shardul>(data);
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  addoreditsShardul(shardul: Shardul): void {
    if (shardul.id !== 0) {
      // Update logic
      this.shardulService.updateShardul(shardul).subscribe({
        next: (data) => {
          console.log('Entry updated successfully!');
          this.updateLocalShardul(data); // Update local shardul list
          this.dataSource.data = [...this.sharduls]; // Force table update
          this.clearall();
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.shardulService.createShardul(shardul).subscribe({
        next: (data) => {
          console.log('New entry created successfully!');
          this.addLocalShardul(data); // Add to local shardul list
          this.dataSource.data = [...this.sharduls]; // Force table update
          this.clearall();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  addLocalShardul(newShardul: Shardul) {
    this.sharduls.push(newShardul); // Add new entry to local array
  }

  updateLocalShardul(updatedShardul: Shardul) {
    const index = this.sharduls.findIndex(s => s.id === updatedShardul.id);
    if (index !== -1) {
      this.sharduls[index] = updatedShardul; // Update existing entry in local array
    } else {
      console.error(`Shardul with ID ${updatedShardul.id} not found in local state.`);
    }
  }

  clearall() {
    this.shardul = {
      id: 0,
      PRODUCT_ID: '',
      PRODUCT_NAME: '',
      CATEGORY_ID: '',
      CATEGORY_NAME: ''
    };
  }

  editfill(shardul: Shardul) {
    this.shardul = { ...shardul };
  }

  deleteShardul(id: Number) {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      this.shardulService.deleteShardul(id).subscribe({
        next: () => {
          console.log('Entry deleted successfully!');
          this.sharduls = this.sharduls.filter(item => item.id !== id);
          this.dataSource.data = [...this.sharduls]; // Force table update
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
