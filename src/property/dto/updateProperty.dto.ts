import { PartialType } from "@nestjs/mapped-types";
import { CreatePropertyDto } from "./createPrperty.dto";


export class UpdateProperty extends PartialType(CreatePropertyDto) {}