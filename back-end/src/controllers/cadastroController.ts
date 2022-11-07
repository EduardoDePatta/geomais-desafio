import { Request, Response } from 'express';

import pool from '../database';


class CardapioController {


    public async list (req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM registro')
        res.json(users);
    } 

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM registro WHERE id = ?', [id]);
        if (user.length > 0){
            return res.json(user[0]);
        }
        res.status(404).json({text: "The user doesn't exist"})
    } 


    public async search (req: Request, res: Response): Promise<any> {
        const { search } = req.params;  
        const likeSearch = '%'+search+'%';      
        const user = await pool.query('SELECT * FROM registro WHERE cpf LIKE ? OR rg LIKE ? OR nome LIKE ? OR sexo LIKE ?', [likeSearch, likeSearch, likeSearch, likeSearch]);
        if (user.length > 0){
            return res.json(user);
        } 
        res.status(404).json({text: "The user doesn't exist"})
    }

    public async create (req: Request, res: Response): Promise<void> {
        const user = await pool.query('SELECT * FROM registro WHERE cpf = ? OR rg = ?', [req.body.cpf, req.body.rg])
        if (user.length > 0){
            res.status(404).json({text: 'CPF ou RG já registrado. Impossível realizar novo registro.'}); 
            return;
        } else {
            await pool.query('INSERT INTO registro SET ?', [req.body])
            res.json({text: 'User Saved'});
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM registro WHERE id = ?', [id]);
        res.json({message: 'User was deleted'})
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const user = await pool.query('SELECT * FROM registro WHERE cpf = ? OR rg = ?', [req.body.cpf, req.body.rg])
        if (user.length > 0){
            res.status(404).json({text: 'CPF ou RG já registrados. Impossível realizar novo registro'})
        } else{
            await pool.query('UPDATE registro set ? WHERE id = ?', [req.body, id]);
            res.json({message: 'User Updated'})
        }
    }
}

const cardapioController = new CardapioController();
export default cardapioController;