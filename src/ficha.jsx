import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const CharacterSheet = () => {
  // Estados
  const [lasersValue, setLasersValue] = useState(5);
  const [feelingsValue, setFeelingsValue] = useState(5);
  const [imageUrl, setImageUrl] = useState(null);

  const updateLasers = (value) => {
    setLasersValue(value);
    setFeelingsValue(10 - value);
  };

  const arquetipos = [
    // Técnicos
    "Mecânico",
    "Hacker",
    "Programador",
    "Técnico em Robótica",
    "Engenheiro",
    "Técnico em Eletrônica",
    // Artísticos
    "Músico",
    "DJ",
    "Artista Digital",
    "Artista de Rua",
    "Produtor Musical",
    "Designer",
    // Boêmios/Vida Noturna
    "Boêmio",
    "Bartender",
    "Dono de Bar",
    "Promoter",
    "Jogador Profissional",
    "Segurança de Clube",
    // Corporativos
    "Executivo",
    "Empresário",
    "Vendedor",
    "Consultor",
    "Analista de Dados",
    // Marginais
    "Contrabandista",
    "Hacker Criminoso",
    "Traficante de Informações",
    "Mercenário",
    "Investigador Particular",
    // Outros
    "Médico",
    "Psicólogo",
    "Jornalista",
    "Atleta",
    "Professor",
    "Motorista"
  ];

  const defeitos = [
    // Defeitos Físicos
    "Claudicante",
    "Visão Prejudicada",
    "Audição Reduzida",
    "Cicatriz Notável",
    "Mão Tremula",
    "Problema Respiratório",
    "Dor Crônica",
    // Defeitos Mentais
    "Insônia Crônica",
    "Dores de Cabeça Frequentes",
    "Distrações Constantes",
    "Dificuldade de Concentração",
    "Ansiedade Social",
    "Paranoia Leve",
    // Defeitos Comportamentais
    "Workaholic",
    "Perfeccionista Obsessivo",
    "Dificuldade com Tecnologia",
    "Apego Excessivo a Rotinas",
    "Desconfiança de Estranhos",
    "Medo de Altura",
    // Defeitos Emocionais
    "Dificuldade de Adaptação",
    "Apego ao Passado",
    "Dúvida Constante",
    "Necessidade de Controle",
    "Impulsividade",
    "Dificuldade com Mudanças"
  ];

  const dificuldades = [
    { nivel: "Fácil", valor: 3, descricao: "Tarefa simples, cotidiana" },
    { nivel: "Médio", valor: 5, descricao: "Requer algum esforço" },
    { nivel: "Difícil", valor: 7, descricao: "Desafiador, risco considerável" },
    { nivel: "Muito Difícil", valor: 9, descricao: "Alta complexidade, alto risco" },
    { nivel: "Extremo", valor: 11, descricao: "Quase impossível" }
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 font-mono text-sm">
      {/* Cabeçalho reformulado */}
      <div className="grid grid-cols-2 gap-1 border-2 border-black">
        <div className="border-r-2 border-black p-2">
          <div className="mb-2">
            <label className="font-bold">Nome:</label>
            <input type="text" className="w-full p-1 border border-gray-300 rounded" />
          </div>
          <div className="mb-2">
            <label className="font-bold">Motivação e Notas:</label>
            <textarea className="w-full h-32 p-1 border border-gray-300 rounded" 
              placeholder="O que move seu personagem? Quais seus objetivos? Anotações importantes..." />
          </div>
          <div>
            <label className="font-bold">Itens Especiais:</label>
            <textarea className="w-full h-24 p-1 border border-gray-300 rounded" 
              placeholder="Liste seus equipamentos e itens importantes..." />
          </div>
        </div>
        <div className="p-2">
          <label className="font-bold block mb-2">Imagem do Personagem:</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-64 flex flex-col items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt="Character" className="max-w-full max-h-full object-contain" />
            ) : (
              <div className="text-center">
                <Upload className="mx-auto w-12 h-12 text-gray-400 mb-2" />
                <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Upload Imagem
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arquétipo e Ocupação */}
      <div className="grid grid-cols-2 gap-1 border-2 border-t-0 border-black">
        <div className="border-r-2 border-black p-2">
          <label className="font-bold block text-center">ARQUÉTIPO</label>
          <select className="w-full p-1 border border-gray-300 rounded mt-1">
            <option value="">Selecione...</option>
            {arquetipos.map((arq, index) => (
              <option key={index} value={arq}>{arq}</option>
            ))}
          </select>
        </div>
        <div className="p-2">
          <label className="font-bold block text-center">OCUPAÇÃO</label>
          <input type="text" className="w-full p-1 border border-gray-300 rounded mt-1" 
            placeholder="Trabalho/Função atual" />
        </div>
      </div>

      {/* Pontuações LASERS e FEELINGS */}
      <div className="grid grid-cols-2 gap-1 border-2 border-t-0 border-black">
        <div className="border-r-2 border-black p-4">
          <div className="text-center font-bold mb-2">LASERS</div>
          <div className="flex items-center justify-center space-x-2">
            <input 
              type="range" 
              min="1" 
              max="9" 
              value={lasersValue}
              onChange={(e) => updateLasers(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="w-8 text-center">{lasersValue}</span>
          </div>
          <div className="text-sm text-center mt-1">Técnico/Físico</div>
        </div>
        <div className="p-4">
          <div className="text-center font-bold mb-2">FEELINGS</div>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-8 text-center">{feelingsValue}</span>
            <input 
              type="range" 
              min="1" 
              max="9" 
              value={feelingsValue}
              disabled
              className="w-full"
            />
          </div>
          <div className="text-sm text-center mt-1">Social/Intuitivo</div>
        </div>
      </div>

      {/* Especialidades */}
      <div className="border-2 border-black mt-4 p-4">
        <div className="font-bold mb-2">ESPECIALIDADES:</div>
        <div className="grid grid-cols-1 gap-2">
          {[1, 2, 3].map((num) => (
            <input 
              key={num}
              type="text" 
              placeholder={`Ex: Hacking, Negociação, Música, etc.`}
              className="w-full p-2 border border-gray-300 rounded" 
            />
          ))}
        </div>
      </div>

      {/* Defeitos/Limitações */}
      <div className="border-2 border-black mt-4 p-4">
        <div className="font-bold mb-2">DEFEITOS/LIMITAÇÕES:</div>
        <select className="w-full p-2 border border-gray-300 rounded mb-2">
          <option value="">Selecione um defeito/limitação...</option>
          {defeitos.map((defeito, index) => (
            <option key={index} value={defeito}>{defeito}</option>
          ))}
          <option value="custom">Outro</option>
        </select>
        <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded" 
          placeholder="Se escolheu 'Outra', descreva aqui..."
        />
      </div>

      {/* Níveis de Dificuldade */}
      <div className="border-2 border-black mt-4 p-4">
        <div className="font-bold mb-2">NÍVEIS DE DIFICULDADE:</div>
        <div className="grid grid-cols-1 gap-2">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Nível</th>
                <th className="p-2 text-center">Valor</th>
                <th className="p-2 text-left">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {dificuldades.map((dif, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 font-bold">{dif.nivel}</td>
                  <td className="p-2 text-center">{dif.valor}+</td>
                  <td className="p-2">{dif.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sistema de Rolagem */}
      <Card className="mt-4 border-2 border-black p-4">
        <div className="font-bold">SISTEMA:</div>
        <ul className="list-disc ml-4 mt-2">
          <li>Quando fizer algo desafiador, role 1d10</li>
          <li>Adicione 1d10 se estiver preparado</li>
          <li>Adicione 1d10 se for especialista</li>
          <li>Para ações LASERS (técnicas): role ABAIXO do seu número em LASERS</li>
          <li>Para ações FEELINGS (sociais): role ABAIXO do seu número em FEELINGS</li>
          <li>Compare o resultado com a dificuldade da tarefa</li>
        </ul>
      </Card>

      {/* Nota de crédito */}
      <div className="text-right text-xs text-gray-500 mt-2">
        Inspirado em Lasers & Feelings
      </div>
    </div>
  );
};

export default CharacterSheet;