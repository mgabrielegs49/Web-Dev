import prisma from '../prisma/client.js';

type AlunoCreateData = {
    pessoa: {
        email: string | null;
        telefone: string | null;
        tipo: 'F';
        pessoaFisica: {
            nome: string;
            cpf: string | null;
            rg: string | null;
            data_nascimento: Date | null;
        }
    }
};

export async function list() {
    return prisma.aluno.findMany({
        include: {
            pessoa: {
                include: {
                    pessoaFisica: true
                }
            },
            matriculas: true
        }
    });
}

export async function getById(id: string) {
    return prisma.aluno.findUnique({
        where: { id },
        include: {
            pessoa: {
                include: {
                    pessoaFisica: true
                }
            },
            matriculas: true
        }
    });
}

export async function create(data: AlunoCreateData) {
    return prisma.aluno.create({
        data: {
            pessoa: {
                create: {
                    tipo: data.pessoa.tipo,
                    email: data.pessoa.email,
                    telefone: data.pessoa.telefone,
                    pessoaFisica: {
                        create: {
                            nome: data.pessoa.pessoaFisica.nome,
                            cpf: data.pessoa.pessoaFisica.cpf,
                            rg: data.pessoa.pessoaFisica.rg,
                            data_nascimento: data.pessoa.pessoaFisica.data_nascimento
                        }
                    }
                }
            }
        },
        include: {
            pessoa: {
                include: {
                    pessoaFisica: true
                }
            }
        }
    });
}

export async function update(id: string, data: Partial<AlunoCreateData>) {
    const aluno = await getById(id);
    if (!aluno) {
        throw new Error('Aluno não encontrado');
    }

    const updateData: any = {};
    
    if (data.pessoa?.email !== undefined) updateData.email = data.pessoa.email;
    if (data.pessoa?.telefone !== undefined) updateData.telefone = data.pessoa.telefone;

    const pessoaFisicaUpdate: any = {};
    if (data.pessoa?.pessoaFisica?.nome !== undefined) pessoaFisicaUpdate.nome = data.pessoa.pessoaFisica.nome;
    if (data.pessoa?.pessoaFisica?.cpf !== undefined) pessoaFisicaUpdate.cpf = data.pessoa.pessoaFisica.cpf;
    if (data.pessoa?.pessoaFisica?.rg !== undefined) pessoaFisicaUpdate.rg = data.pessoa.pessoaFisica.rg;
    if (data.pessoa?.pessoaFisica?.data_nascimento !== undefined) pessoaFisicaUpdate.data_nascimento = data.pessoa.pessoaFisica.data_nascimento;

    if (Object.keys(pessoaFisicaUpdate).length > 0) {
        updateData.pessoaFisica = { update: pessoaFisicaUpdate };
    }

    return prisma.aluno.update({
        where: { id },
        data: {
            pessoa: {
                update: updateData
            }
        },
        include: {
            pessoa: {
                include: {
                    pessoaFisica: true
                }
            }
        }
    });
}

export async function remove(id: string) {
    const aluno = await getById(id);
    if (!aluno) {
        throw new Error('Aluno não encontrado');
    }

    return prisma.aluno.delete({
        where: { id }
    });
}