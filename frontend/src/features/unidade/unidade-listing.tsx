'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface UnidadeEscolar {
  id: string;
  nome: string;
  codigo_inep: string | null;
  endereco: {
    logradouro: string;
    numero: string | null;
    bairro: string | null;
    cep: string | null;
  } | null;
}

export default function UnidadeListing() {
  const [unidades, setUnidades] = useState<UnidadeEscolar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUnidades();
  }, []);

  const fetchUnidades = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3333/api/unidades');
      if (!response.ok) throw new Error('Erro ao carregar unidades');
      const data = await response.json();
      setUnidades(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar lista de unidades. Verifique se o backend está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta unidade escolar?')) return;

    try {
      const response = await fetch(`http://localhost:3333/api/unidades/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Erro ao excluir unidade');
      
      // Atualizar lista
      setUnidades(unidades.filter(unidade => unidade.id !== id));
    } catch (err) {
      alert('Erro ao excluir unidade escolar');
      console.error(err);
    }
  };

  const formatAddress = (unidade: UnidadeEscolar) => {
    if (!unidade.endereco) return '-';
    const { logradouro, numero, bairro } = unidade.endereco;
    return `${logradouro}${numero ? `, ${numero}` : ''}${bairro ? ` - ${bairro}` : ''}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-muted-foreground">Carregando unidades escolares...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-lg text-destructive">{error}</p>
        <Button onClick={fetchUnidades}>Tentar Novamente</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-foreground">Unidades Escolares</h1>
        <Link href="/dashboard/unidade/nova">
          <Button className="flex items-center gap-2">
            <School size={18} />
            Nova Unidade
          </Button>
        </Link>
      </div>

      {unidades.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">Nenhuma unidade escolar cadastrada</p>
            <Link href="/dashboard/unidade/nova">
              <Button>
                <School size={18} className="mr-2" />
                Cadastrar Primeira Unidade
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {unidades.map((unidade) => (
            <Card key={unidade.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  {unidade.nome}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Código INEP:</span>
                    <p className="text-foreground">{unidade.codigo_inep || '-'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Endereço:</span>
                    <p className="text-foreground">{formatAddress(unidade)}</p>
                  </div>
                  {unidade.endereco?.cep && (
                    <div>
                      <span className="font-medium text-muted-foreground">CEP:</span>
                      <p className="text-foreground">{unidade.endereco.cep}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link href={`/dashboard/unidade/${unidade.id}`} className="flex-1">
                    <Button variant="outline" className="w-full" size="sm">
                      <Pencil size={16} className="mr-2" />
                      Editar
                    </Button>
                  </Link>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(unidade.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

