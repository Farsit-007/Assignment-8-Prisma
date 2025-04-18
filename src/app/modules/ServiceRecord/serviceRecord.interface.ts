import { Status } from "@prisma/client"

export type TStatus = Status
export type IRecord = {
    bikeId : string
    serviceDate : string
    completionDate ?: Date | null,
    description : string,
    status : TStatus
}