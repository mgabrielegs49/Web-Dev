import prisma from '../prisma/client.js';

type UnidadeCreateRequest = {
    nome: string;
    codigo_inep?: string | null;
    endereco?: {
        cep?: string | null;
        logradouro: string;
        bairro?: string | null;
        municipio_id?: number | null;
        estado_id?: number | null;
        complemento?: string | null;
        numero?: string | null;
    }
}

export async function list() {
    return await prisma.unidadeEscolar.findMany();
}

export async function getUnidadeById(id: string) {
    return await prisma.unidadeEscolar.findUnique({ where: { id } })
}

export async function create(data: UnidadeCreateRequest) {
    const createData: any = {
        nome: data.nome,
        codigo_inep: data.codigo_inep
    };

    if (data.endereco) {
        createData.endereco = {
            create: {
                cep: data.endereco.cep,
                logradouro: data.endereco.logradouro,
                numero: data.endereco.numero,
                bairro: data.endereco.bairro,
                complemento: data.endereco.complemento,
                municipio_id: data.endereco.municipio_id,
                estado_id: data.endereco.estado_id
            }
        };
    }

    const result = await prisma.unidadeEscolar.create({
        data: createData,
        include: {
            endereco: true
        }
    });

    return result;
}   

export async function update(id: string, data: Partial<UnidadeCreateRequest>) { 
    const unidade = await getUnidadeById(id);
    if (!unidade) {
        throw new Error('Unidade não encontrada');
    }

    const { endereco, ...unidadeData } = data;

    const updateData: any = { ...unidadeData };

    if (endereco && unidade.endereco_id) {
        updateData.endereco = {
            update: endereco
        };
    }

    const result = await prisma.unidadeEscolar.update({
        where: { id },
        data: updateData,
        include: {
            endereco: true
        }
    });
    
    return result;
}

export async function remove(id: string) {
    const unidade = await getUnidadeById(id);
    if (!unidade) {
        throw new Error('Unidade não encontrada');
    }
    
    await prisma.unidadeEscolar.delete({ where: { id } });
}
