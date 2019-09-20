import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  editedItemIndex: number;
  editMode = false;
  editSubscription: Subscription;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  // onAdd(name, amount) {
  //   this.listItem.emit(new Ingredient(name.value, amount.value));
  //   this.listItem.emit({
  //     name: name.value,
  //     amount: amount.value
  //   });
  // }

  // onAddition() {
  //   const name = this.nameInputRef.nativeElement.value;
  //   const amount = this.amountInputRef.nativeElement.value;
  //   const newIngedient = new Ingredient(name, amount);
  //   this.shoppingListService.addNewIngredient(newIngedient);
  // }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngedient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(newIngedient, this.editedItemIndex);
    } else {
      this.shoppingListService.addNewIngredient(newIngedient);
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }


  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

}
