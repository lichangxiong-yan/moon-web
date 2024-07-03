import { Pagination, PaginationReply, SelectType, Status } from '../global'

/** 持续类型枚举 */
export enum SustainType {
  // 未知持续类型
  SustainTypeUnknown = 0,

  // m时间内出现n次
  SustainTypeFor = 1,

  // m时间内最多出现n次
  SustainTypeMax = 2,

  // m时间内最少出现n次
  SustainTypeMin = 3,
}

/** 条件枚举 */
export type Condition = '=' | '!=' | '>' | '<' | '>=' | '<='

/** 策略模块空响应体 */
export interface StrategyTemplateNullResponse {}

/** 策略等级类型 */
export interface MutationStrategyLevelTemplateType {
  // 策略持续时间
  duration: string
  // 持续次数
  count: number
  // 持续的类型
  sustainType: SustainType
  // 执行频率
  interval: string
  // 条件
  condition: string
  // 阈值
  threshold: number
  // ID
  id: number
}

/** 策略等级ID类型 */
export type StrategyLevelIDType = number

/** 创建策略模板请求体 */
export interface CreateStrategyTemplateRequest {
  // 策略名称
  alert: string
  // 策略表达式
  expr: string
  // 策略说明信息
  remark: string
  // 标签字典
  labels: Record<string, string>
  // 注解
  annotations: Record<string, string>
  // 策略等级明细
  level: Record<StrategyLevelIDType, MutationStrategyLevelTemplateType>
}

/** 策略等级模板详情 */
export interface StrategyLevelTemplateItemType {
  // 策略等级数据ID
  id: number
  // 策略持续时间
  duration: string
  // 持续次数
  count: number
  // 持续的类型
  sustainType: SelectType
  // 执行频率
  interval: string
  // 状态
  status: Status
  // 策略等级
  levelId: number
  // 策略等级明细
  level: SelectType
  // 阈值
  threshold: number
  // 条件
  condition: Condition
  // 策略模板ID
  strategyId: number
}

/** 策略模板详情 */
export interface StrategyTemplateItemType {
  // 策略模板ID
  id: number
  // 策略名称
  Alert: string
  // 策略表达式
  expr: string
  // 策略各等级明细
  levels: StrategyLevelTemplateItemType[]
  // 策略标签
  labels: Record<string, string>
  // 策略注解
  annotations: Record<string, string>
  // 策略状态
  status: Status
  // 创建时间
  createdAt: string
  // 更新时间
  updatedAt: string
  // 策略说明信息
  remark: string
}

/** 获取策略模板相应参数 */
export interface GetStrategyTemplateResponse {
  // 策略模板详情
  detail: StrategyTemplateItemType
}

/** 策略模板列表请求参数 */
export interface GetStrategyTemplateListRequest {
  // 分页参数
  pagination: Pagination
  // 搜索关键字
  keyword?: string
  // 状态
  status?: Status
}

/** 策略模板列表响应参数 */
export interface GetStrategyTemplateListResponse {
  // 策略模板列表
  list: StrategyTemplateItemType[]
  // 分页信息
  pagination: PaginationReply
}

/** 更新策略模板请求参数 */
export interface UpdateStrategyTemplateRequest {
  // 策略名称
  alert: string
  // 策略表达式
  expr: string
  // 策略说明信息
  remark: string
  // 标签
  labels: Record<string, string>
  // 注解
  annotations: Record<string, string>
  // 策略等级
  level: Record<StrategyLevelIDType, MutationStrategyLevelTemplateType>
}
