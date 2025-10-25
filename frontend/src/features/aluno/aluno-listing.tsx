'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface Aluno {
  id: string;
  pessoa: {
    email: string | null;
    telefone: string | null;
    pessoaFisica: {
      nome: string;
      cpf: string | null;
      rg: string | null;
      data_nascimento: string | null;
    } | null;
  };
}

export default function AlunoListing() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3333/api/alunos');
      if (!response.ok) throw new Error('Erro ao carregar alunos');
      const data = await response.json();
      setAlunos(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar lista de alunos. Verifique se o backend está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este aluno?')) return;

    try {
      const response = await fetch(`http://localhost:3333/api/alunos/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Erro ao excluir aluno');
      
      // Atualizar lista
      setAlunos(alunos.filter(aluno => aluno.id !== id));
    } catch (err) {
      alert('Erro ao excluir aluno');
      console.error(err);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-muted-foreground">Carregando alunos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-lg text-destructive">{error}</p>
        <Button onClick={fetchAlunos}>Tentar Novamente</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-foreground">Alunos</h1>
        <Link href="/dashboard/aluno/novo">
          <Button className="flex items-center gap-2">
            <UserPlus size={18} />
            Novo Aluno
          </Button>
        </Link>
      </div>

      {alunos.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">Nenhum aluno cadastrado</p>
            <Link href="/dashboard/aluno/novo">
              <Button>
                <UserPlus size={18} className="mr-2" />
                Cadastrar Primeiro Aluno
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Lista de Alunos ({alunos.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Nome</th>
                    <th className="text-left p-3 font-medium">Email</th>
                    <th className="text-left p-3 font-medium">Telefone</th>
                    <th className="text-left p-3 font-medium">CPF</th>
                    <th className="text-left p-3 font-medium">Data Nasc.</th>
                    <th className="text-right p-3 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {alunos.map((aluno) => (
                    <tr key={aluno.id} className="border-b hover:bg-muted/50">
                      <td className="p-3">{aluno.pessoa.pessoaFisica?.nome || '-'}</td>
                      <td className="p-3">{aluno.pessoa.email || '-'}</td>
                      <td className="p-3">{aluno.pessoa.telefone || '-'}</td>
                      <td className="p-3">{aluno.pessoa.pessoaFisica?.cpf || '-'}</td>
                      <td className="p-3">
                        {formatDate(aluno.pessoa.pessoaFisica?.data_nascimento || null)}
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/dashboard/aluno/${aluno.id}`}>
                            <Button variant="outline" size="sm">
                              <Pencil size={16} />
                            </Button>
                          </Link>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDelete(aluno.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

