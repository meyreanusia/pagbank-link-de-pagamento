"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setProducts } from './store/reducers/products';

let data = [
  {
    data: "01/07/2024",
    produto: "Produto A",
    status: "ativo",
    vendas: 150,
    valor: 29.99,
    id: uuidv4(),
  },
  {
    data: "15/06/2024",
    produto: "Produto B",
    status: "expirado",
    vendas: 75,
    valor: 19.99,
    id: uuidv4(),
  },
  {
    data: "30/05/2024",
    produto: "Produto C",
    status: "pausado",
    vendas: 50,
    valor: 9.99,
    id: uuidv4(),
  },
  {
    data: "10/07/2024",
    produto: "Produto D",
    status: "ativo",
    vendas: 200,
    valor: 39.99,
    id: uuidv4(),
  },
];

export default function ClientSideInitializer() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const dataFromStage = localStorage.getItem("links-payments");
    if (dataFromStage) {
      dispatch(setProducts(JSON.parse(dataFromStage)));
    } else {
      localStorage.setItem("links-payments", JSON.stringify(data));
      dispatch(setProducts(data));
    }
  }, [dispatch]);

  return null;
}
