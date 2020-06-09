import { Pipe, PipeTransform } from '@angular/core';
import { User} from './service/user.service';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: User[], term: string): unknown {
    return items.filter(item => (item.first_name.indexOf(term) !== -1 || item.last_name.indexOf(term) !== -1 ) );
  }

}
