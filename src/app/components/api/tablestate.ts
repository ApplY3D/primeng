import { SortMeta } from "./sortmeta";
import { FilterMetadata, FilterMetadataWithOperator } from "./filtermetadata";

export interface TableState {
    first?: number;
    rows?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: SortMeta[];
    filters?: { [s: string]: FilterMetadata | FilterMetadataWithOperator[] };
    columnWidths?: string;
    tableWidth?: string;
    wrapperWidth?: string;
    selection?: any;
    columnOrder?: string[];
    expandedRowKeys?: { [s: string]: boolean };
}
