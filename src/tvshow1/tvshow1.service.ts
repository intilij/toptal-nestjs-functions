import { Injectable } from '@nestjs/common';
import { CreateTvshow1Dto } from './dto/create-tvshow1.dto';
import { UpdateTvshow1Dto } from './dto/update-tvshow1.dto';
import * as admin from 'firebase-admin';

@Injectable()
export class Tvshow1Service {
  create(createTvshow1Dto: CreateTvshow1Dto) {
    return 'This action adds a new tvshow1';
  }

  findAll() {
    /*
    // Firebase Realtime Database example:
    const dbRef = admin.database().ref("toplevel1");
    return dbRef.get()
     */

    // Cloud Firestore example.
    const dbFirestore = admin.firestore();

    return dbFirestore.collection('users').get()
        .then(querySnapshot => {
          let queryResult: {}[] = [];
          querySnapshot.forEach(doc => {
            let data = this.sortJsonObjectByKeys(doc.data());
            queryResult.push(data);
          });

          return queryResult;
        })
  }

  private sortJsonObjectByKeys(unsortedJson): any {
    let data = Object.keys(unsortedJson).sort().reduce(
        (obj, key) => {
          obj[key] = unsortedJson[key];
          return obj;
        },
        {}
    );

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} tvshow1`;
  }

  update(id: number, updateTvshow1Dto: UpdateTvshow1Dto) {
    return `This action updates a #${id} tvshow1`;
  }

  remove(id: number) {
    return `This action removes a #${id} tvshow1`;
  }

  getTest(): string {
    return "This is a test of the tvshow1 controller @Get call.";
  }
}
