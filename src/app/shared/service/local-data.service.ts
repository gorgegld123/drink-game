import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

const NAME = 'localData'
@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  localData: any

  private localDataBh$ = new BehaviorSubject<any>(null)
  localData$: Observable<any> = this.localDataBh$.asObservable()

  constructor() {
    const cache = JSON.parse(localStorage.getItem(NAME) || '{}')
    this.localData = cache 
  }

  get() {
    this.localData = JSON.parse(localStorage.getItem(NAME) || '{}')
    return this.localData
  }

  create(): void {
    this.localData 
    this.storeCache()
  }

  reset(): void {
    this.localData 
    this.storeCache()
  }

  set(key: string, value: any): void {
    this.localData[key] = value
    this.storeCache()
  }

  storeCache(): void {
    localStorage.setItem(NAME, JSON.stringify(this.localData || {}))
    this.localDataBh$.next(this.localData)
  }

  delete(key: string): void {
    delete this.localData[key]
    this.storeCache()
  }
}
