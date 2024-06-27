import { BadgeProps } from 'antd'

export interface Pagination {
  pageNum: number
  pageSize: number
}

export interface PaginationResponse<T> {
  pagination: Pagination & {
    total: number
  }
  list: T[]
}

export enum Status {
  ALL = 0,
  ENABLE = 1,
  DISABLE = 2,
}

export const StatusData: Record<Status, BadgeProps> = {
  [Status.ALL]: {
    color: 'blue',
    text: '全部',
  },
  [Status.ENABLE]: {
    color: 'green',
    text: '启用',
  },
  [Status.DISABLE]: {
    color: 'red',
    text: '禁用',
  },
}

export enum Gender {
  ALL = 0,
  MALE = 1,
  FEMALE = 2,
}

export const GenderData: Record<Gender, string> = {
  [Gender.ALL]: '全部',
  [Gender.MALE]: '男',
  [Gender.FEMALE]: '女',
}

export enum SystemRole {
  // 全部 / 未知
  ROLE_ALL = 0,
  // 管理员
  ROLE_SUPPER_ADMIN = 1,
  // 普通管理员
  ROLE_ADMIN = 2,
  // 普通用户
  ROLE_USER = 3,
}

export const SystemRoleData: Record<SystemRole, string> = {
  [SystemRole.ROLE_ALL]: '全部',
  [SystemRole.ROLE_SUPPER_ADMIN]: '超级管理员',
  [SystemRole.ROLE_ADMIN]: '管理员',
  [SystemRole.ROLE_USER]: '普通用户',
}

// MetricType 指标类型
export enum MetricType {
  // 未知指标类型
  MetricTypeUnknown = 0,
  // Counter
  MetricTypeCounter = 1,
  // Gauge
  MetricTypeGauge = 2,
  // Histogram
  MetricTypeHistogram = 3,
  // Summary
  MetricTypeSummary = 4,
}

export type TagItemType = {
  text: string
  color: string
}

export const MetricTypeData: Record<MetricType, TagItemType> = {
  [MetricType.MetricTypeUnknown]: {
    text: '全部',
    color: '',
  },
  [MetricType.MetricTypeCounter]: {
    text: 'Counter',
    color: 'green',
  },
  [MetricType.MetricTypeGauge]: {
    text: 'Gauge',
    color: 'blue',
  },
  [MetricType.MetricTypeHistogram]: {
    text: 'Histogram',
    color: 'purple',
  },
  [MetricType.MetricTypeSummary]: {
    text: 'Summary',
    color: 'orange',
  },
}

// 数据源类型
export enum DataSourceType {
  // 未知数据源类型
  DataSourceTypeUnknown = 0,

  DataSourceTypeMetric = 1,

  DataSourceTypeLog = 2,

  DataSourceTypeTrace = 3,
}

export const DataSourceTypeData: Record<DataSourceType, string> = {
  [DataSourceType.DataSourceTypeUnknown]: '全部',
  [DataSourceType.DataSourceTypeMetric]: 'Metric',
  [DataSourceType.DataSourceTypeLog]: 'Log',
  [DataSourceType.DataSourceTypeTrace]: 'Trace',
}

// 存储器类型
export enum StorageType {
  // 未知存储器类型
  StorageTypeUnknown = 0,
  // Prometheus
  StorageTypePrometheus = 1,
  // TODO 待开发
}

export const StorageTypeData: Record<StorageType, string> = {
  [StorageType.StorageTypeUnknown]: '全部',
  [StorageType.StorageTypePrometheus]: 'Prometheus',
}
