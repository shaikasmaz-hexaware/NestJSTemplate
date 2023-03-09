import { menuRepo } from '../repository/menu.repo';
import { menu } from '../schemas/menu.schema';
export declare class menuService {
    private readonly menuRepo;
    constructor(menuRepo: menuRepo);
    findAll(): Promise<menu[]>;
    create(data: any): Promise<menu>;
    update(menuId: any, data: any): Promise<menu>;
    delete(menuId: any): Promise<menu>;
}
