import { injectable } from "tsyringe";
import { SomeOtherService } from "./SomeOtherService";

@injectable()
export class SomeService {
  constructor(private someOtherService: SomeOtherService) {}

  someMethod () {
    this.someOtherService.someOtherServiceMethod()
    console.log('Service method called')
  }
}
