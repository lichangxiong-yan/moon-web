import { Condition, Status, StatusData, SustainType } from '@/api/global'
import { DataFromItem } from '@/components/data/form'

export type LevelItemType = {
  condition: Condition
  count: number
  duration: number
  levelId: number
  sustainType: SustainType
  threshold: number
  status: Status
  id?: number
}

export type TemplateEditModalFormData = {
  alert: string
  datasource?: string
  expr: string
  labelsItems: {
    key: string
    value: string
  }[]
  annotations: {
    summary: string
    description: string
  }
  levelItems: LevelItemType[]
  remark: string
  categoriesIds: number[]
}

export const searchItems: DataFromItem[] = [
  {
    name: 'keyword',
    label: '模板名称',
    type: 'input',
    props: {
      placeholder: '请输入模板名称',
      allowClear: true,
    },
  },
  {
    name: 'status',
    label: '状态',
    type: 'radio-group',
    props: {
      options: Object.entries(StatusData).map(([key, value]) => {
        return {
          label: value.text,
          value: Number(key),
        }
      }),
      optionType: 'button',
    },
  },
]
  //搜索参数
  const searchWidth = "200px"
export const formList: any[] = [
  {
    type: 1,
    name: 'keyword',
    placeholder: '请输入模板名称',
  },
  {
    type: 4,
    name: 'urgency',
    placeholder: '状态',
    options: Object.entries(StatusData).map(([key, value]) => {
      return {
        label: value.text,
        value: Number(key),
      }
    }),
  },
];