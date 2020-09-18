import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable()
export class SiteSettingsProvider {
  private COLLECTION = "site-settings";
  public denyAnonymous: boolean;

  constructor(private db: AngularFirestore) {
  }

  public load() {
    return new Promise((resolve, reject) => {
        this.get('denyAnonymous').subscribe(setting => {
            this.denyAnonymous = setting.denyAnonymous;
            resolve(true);
        });
    });
  }

  public get(id: string): Observable<any> {
    return this.db
      .collection(this.COLLECTION)
      .doc(id)
      .valueChanges();
  }
}