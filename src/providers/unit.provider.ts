import { Observable } from 'rxjs';
import { WhereCondition } from "./../model/where-condition";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class UnitProvider {
  private COLLECTION = "units";

  constructor(private db: AngularFirestore) {}

  public all(orderBy, direction): Observable<any[]> {
    return this.db
      .collection(this.COLLECTION, ref =>
        ref.orderBy(orderBy, direction)
      )
      .valueChanges();
  }

  public get(id: string): Observable<any> {
    return this.db
      .collection(this.COLLECTION)
      .doc(id)
      .valueChanges();
  }

  public query(
    conditions: WhereCondition[],
    orderBy,
    direction
  ): Observable<any[]> {
    return this.db
      .collection(this.COLLECTION, ref => {
        let query = ref.orderBy(orderBy, direction);
        for (const c of conditions) {
          query = query.where(c.field, c.op, c.value);
        }
        return query;
      })
      .valueChanges();
  }

  public async set(unit) {
    return this.db
      .collection(this.COLLECTION)
      .doc(unit.id)
      .set(unit);
  }

  public async delete(id: string) {
    return this.db
      .collection(this.COLLECTION)
      .doc(id)
      .delete();
  }
}