n_estacas = int(input('Número de estacas: '))
estacas = []
visadas_re = []
alt_instrumento = []
visadas_intermediarias = []
visadas_mudanca = []

for i in range(n_estacas):
    estacas.append(input(f'Estaca {i+1}: '))
    visadas_re.append(float(input(f'Visada ré para estaca {estacas[i]}: ')))
    alt_instrumento.append(float(input(f'Altura do instrumento para estaca {estacas[i]}: ')))
    
    visada_intermediaria = float(input(f'Visada intermediária para estaca {estacas[i]} (0 se não houver): '))
    visadas_intermediarias.append(visada_intermediaria)
    
    visada_mudanca = input(f'Visada de mudança para estaca {estacas[i]} (deixe em branco se não houver): ')
    visadas_mudanca.append(visada_mudanca)
    
cotas = []
cota_inicial = float(input('Cota inicial: '))
cotas.append(cota_inicial)

for i in range(n_estacas):
    if visadas_mudanca[i] != '':
        if visada_intermediaria[i] != 0:
            cota = alt_instrumento[i] - float(visadas_mudanca[i])
            cotas.append(cota)
        else:
            cota = alt_instrumento[i] - float(visadas_mudanca[i])
            cotas.append(cota)
    else:
        if visada_intermediaria[i] != 0:
            cota = cotas[i] + visadas_intermediarias[i] - visadas_re[i]
            cotas.append(cota)
        else:
            cota = cotas[i] - visadas_re[i]
            cotas.append(cota)

cota_final = cota_inicial + sum(visadas_intermediarias) - sum([float(x) for x in visadas_mudanca])
print(f'Cota Final: {cota_final}')

# Salvar em um arquivo CSV
with open('planilha.csv', 'w') as f:
    f.write('Estaca, Visada Ré, Altura do Instrumento, Visada Intermediária, Visada de Mudança, Cota\n')
    for i in range(n_estacas):
        f.write(f'{estacas[i]}, {visadas_re[i]}, {alt_instrumento[i]}, {visadas_intermediarias[i]}, {visadas_mudanca[i]}, {cotas[i]}\n')
