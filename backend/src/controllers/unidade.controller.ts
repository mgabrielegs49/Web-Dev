import type { Request, Response } from 'express';
import * as UnidadeService from '../services/unidade.service.js';

export async function list(req: Request, res: Response) {
    try {
        const unidades = await UnidadeService.list();
        res.json(unidades);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar unidades escolares' });
    }
}

export async function getById(req: Request, res: Response) {
    const id = String(req.params.id);
    try {
        const unidade = await UnidadeService.getUnidadeById(id);
        if (!unidade) {
            return res.status(404).json({ message: 'Unidade escolar não encontrada' });
        }
        res.json(unidade);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar unidade escolar' });
    }
}

export async function create(req: Request, res: Response) {
    const { nome, codigo_inep, endereco } = req.body;

    if (!nome) {
        return res.status(400).json({ message: 'Nome é obrigatório' });
    }

    try {
        const unidade = await UnidadeService.create({
            nome,
            codigo_inep,
            endereco
        });
        res.status(201).json(unidade);
    } catch (error) {
        console.error('Erro ao criar unidade:', error);
        res.status(500).json({ message: 'Erro ao criar unidade escolar' });
    }
}

export async function update(req: Request, res: Response) {
    const id = String(req.params.id);
    const { nome, codigo_inep, endereco } = req.body;

    try {
        const unidade = await UnidadeService.update(id, {
            nome,
            codigo_inep,
            endereco
        });
        res.json(unidade);
    } catch (error: any) {
        if (error.message === 'Unidade não encontrada') {
            return res.status(404).json({ message: error.message });
        }
        console.error('Erro ao atualizar unidade:', error);
        res.status(500).json({ message: 'Erro ao atualizar unidade escolar' });
    }
}

export async function remove(req: Request, res: Response) {
    const id = String(req.params.id);
    try {
        await UnidadeService.remove(id);
        res.status(204).send();
    } catch (error: any) {
        if (error.message === 'Unidade não encontrada') {
            return res.status(404).json({ message: error.message });
        }
        console.error('Erro ao remover unidade:', error);
        res.status(500).json({ message: 'Erro ao remover unidade escolar' });
    }
}

