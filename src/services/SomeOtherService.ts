import {injectable} from "tsyringe";

@injectable()
export class SomeOtherService {
  constructor() {}

  someOtherServiceMethod () {
    console.log('someOtherServiceMethod method called')
  }
}
