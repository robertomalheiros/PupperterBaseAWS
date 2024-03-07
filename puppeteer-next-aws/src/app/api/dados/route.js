import { NextResponse } from "next/server";
import BuscaDados from "../funcoes/BuscaPJE";

export async function POST(request, response) {
  try {
    const { processo, usuario, password } = await request.json();

    const Dados = await BuscaDados(usuario, password, processo);

    const DadosJson = JSON.stringify(Dados);
    return NextResponse.json({ message: "OK", DadosJson }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
