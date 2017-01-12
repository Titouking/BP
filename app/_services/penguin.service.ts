import { Injectable } from '@angular/core';

import { Penguin } from '../_models/penguin';

@Injectable()
export class PenguinService {
  penguin:Penguin;
}