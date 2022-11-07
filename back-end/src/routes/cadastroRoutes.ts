import { Router } from 'express';
import cadastroController from '../controllers/cadastroController';

class CadastroRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', cadastroController.list);
        this.router.get('/:id', cadastroController.getOne);
        this.router.get('/search/:search', cadastroController.search)
        this.router.post('/', cadastroController.create);
        this.router.delete('/:id', cadastroController.delete);
        this.router.put('/:id', cadastroController.update);
    }
}

const cadastroRoutes = new CadastroRoutes();
export default cadastroRoutes.router;