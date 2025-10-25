import type { Request, Response } from 'express';
import * as AlunoService from '../services/aluno.service.js';

export async function list(req: Request, res: Response) {
    try {
        const alunos = await AlunoService.list();
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar alunos' });
    }
}

export async function getById(req: Request, res: Response) {
    const id = String(req.params.id);
    try {
        const aluno = await AlunoService.getById(id);
        if (!aluno) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar aluno' });
    }
}

export async function create(req: Request, res: Response) {
    const { nome, email, telefone, cpf, rg, data_nascimento } = req.body;

    if (!nome) {
        return res.status(400).json({ message: 'Nome é obrigatório' });
    }

    try {
        const aluno = await AlunoService.create({
            pessoa: {
                tipo: 'F',
                email,
                telefone,
                pessoaFisica: {
                    nome,
                    cpf,
                    rg,
                    data_nascimento: data_nascimento ? new Date(data_nascimento) : null
                }
            }
        });
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar aluno' });
    }
}

export async function update(req: Request, res: Response) {
    const id = String(req.params.id);
    const { nome, email, telefone, cpf, rg, data_nascimento } = req.body;

    try {
        const aluno = await AlunoService.update(id, {
            pessoa: {
                tipo: 'F',
                email,
                telefone,
                pessoaFisica: {
                    nome,
                    cpf,
                    rg,
                    data_nascimento: data_nascimento ? new Date(data_nascimento) : null
                }
            }
        });
        res.json(aluno);
    } catch (error: any) {
        if (error.message === 'Aluno não encontrado') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Erro ao atualizar aluno' });
    }
}

export async function remove(req: Request, res: Response) {
    const id = String(req.params.id);
    try {
        await AlunoService.remove(id);
        res.status(204).send();
    } catch (error: any) {
        if (error.message === 'Aluno não encontrado') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Erro ao remover aluno' });
    }
}