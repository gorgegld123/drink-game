import { commandList } from "../model/model"

export const MINI_GAME: Array<commandList> = [
  {
    id : 1,
    detail: 'รายละเอียดเกมส์ที่ 1',
  },
  {
    id : 2,
    detail: 'รายละเอียดเกมส์ที่ 2',
  },
]


export const CARD : Array<any> = [
  {
    name: 'แพ็กเกจ',
    reference: 'name',
    icon: 'assets/icons/mc-compare-card/hd-package.svg',
  },
  {
    name: 'ราคา (บาท)',
    reference: 'price',
    icon: 'assets/icons/mc-compare-card/hd-price.svg',
  },
  {
    name: 'อินเทอร์เน็ต',
    reference: 'name',
    icon: 'assets/icons/mc-compare-card/hd-network.svg',
  },
  {
    name: 'โทร',
    reference: 'name',
    icon: 'assets/icons/mc-compare-card/hd-call.svg',
  },
]