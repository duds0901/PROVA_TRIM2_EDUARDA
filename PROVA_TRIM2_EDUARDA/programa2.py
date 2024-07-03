
def determinar_estacao(dia, mes):
    if (mes == 9 and dia >= 23) or mes == 10 or mes == 11 or (mes == 12 and dia < 22):
        return "Primavera"
    elif (mes == 12 and dia >= 22) or mes == 1 or mes == 2 or (mes == 3 and dia < 21):
        return "Verão"
    elif (mes == 3 and dia >= 22) or mes == 4 or mes == 5 or (mes == 6 and dia < 21):
        return "Outono"
    else:
        return "Inverno"

def main():
    dia = int(input("Digite o dia: "))
    mes = int(input("Digite o mês (em número): "))

    if mes < 1 or mes > 12 or dia < 1 or dia > 31:
        print("Data inválida.")
    else:
        estacao = determinar_estacao(dia, mes)
        print(f"Na data {dia}/{mes}, estamos na estação: {estacao}")

if __name__ == "__main__":
    main()
