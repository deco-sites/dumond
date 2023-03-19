import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default">
          <FooterContainer>
            <Newsletter />
          </FooterContainer>

          <div class="w-full bg-footer">
            <Text
              tone="default"
              class="w-full font-secondary text-[10px] flex justify-center pt-[55px] uppercase"
            >
              Produtos
            </Text>
            <div class=" w-[50%] border-[2px] border-solid border-black mx-auto mt-[20px] mb-[25px]">
            </div>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Sapatos
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Bolsas
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Acessórios
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[45px]"
            >
              Novidades
            </Text>

            <Text
              tone="default"
              class="w-full font-secondary text-[10px] flex justify-center uppercase"
            >
              Dumond
            </Text>
            <div class=" w-[50%] border-[2px] border-solid border-black mx-auto mt-[20px] mb-[25px]">
            </div>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              A Marca
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Blog
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Seja um Franqueado
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Nossas Lojas
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Política de Privacidade
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Contrato de Compra e Venda
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Trabalhe Conosco
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[45px]"
            >
              Black Friday 2023
            </Text>

            <Text
              tone="default"
              class="w-full font-secondary text-[10px] flex justify-center uppercase"
            >
              Ajuda
            </Text>
            <div class=" w-[50%] border-[2px] border-solid border-black mx-auto mt-[20px] mb-[25px]">
            </div>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Central de Atendimento
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Formas de Pagamento
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Trocas e Devoluções
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[10px]"
            >
              Formas de Entrega
            </Text>

            <Text
              tone="default"
              class="w-full font-primary text-[12px] flex justify-center mb-[45px]"
            >
              Compra Segura
            </Text>

            <Text
              tone="default"
              class="w-full font-secondary text-[10px] flex justify-center uppercase"
            >
              Formas de Pagamento
            </Text>
            <div class=" w-[50%] border-[2px] border-solid border-black mx-auto mt-[20px] mb-[25px]">
            </div>

            <div class="flex flex-col items-center">
              <div class="flex">
                <div
                  class={`w-[58px] h-[31px] bg-no-repeat`}
                  style="background-image: url(/icon-sprites.png); background-position: 0px -307px;"
                >
                </div>
                <div
                  class={`w-[47px] h-[47px] bg-no-repeat mx-[10px]`}
                  style="background-image: url(/icon-sprites.png); background-position: -231px -436px;"
                >
                </div>
                <div
                  class={`w-[61px] h-[36px] bg-no-repeat`}
                  style="background-image: url(/icon-sprites.png); background-position: 0px -436px;"
                >
                </div>
              </div>
              <div class="flex mt-[10px] mb-[45px]">
                <div
                  class={`w-[66px] h-[21px] bg-no-repeat`}
                  style="background-image: url(/icon-sprites.png); background-position: -139px -50px;"
                >
                </div>
                <div
                  class={`w-[67px] h-[50px] bg-no-repeat mx-[10px]`}
                  style="background-image: url(/hipercard.png);"
                >
                </div>
                <div
                  class={`w-[74px] h-[35px] bg-no-repeat`}
                  style="background-image: url(/itau.png);"
                >
                </div>
              </div>
            </div>

            <Text
              tone="default"
              class="w-full font-secondary text-[10px] flex justify-center uppercase"
            >
              Segurança
            </Text>
            <div class=" w-[50%] border-[2px] border-solid border-black mx-auto mt-[20px] mb-[25px]">
            </div>

            <div class="flex flex-col items-center">
              <div
                class={`w-[100px] h-[61px] bg-no-repeat`}
                style="background-image: url(/vtex-pci-100.png);"
              >
              </div>

              <div
                class={`w-[115px] h-[32px] bg-no-repeat mt-[10px] mb-[45px]`}
                style="background-image: url(/site-blindado.png);"
              >
              </div>
            </div>

            <Text
              tone="default"
              class="w-full font-secondary text-[10px] flex justify-center uppercase"
            >
              Certificações
            </Text>
            <div class=" w-[50%] border-[2px] border-solid border-black mx-auto mt-[20px] mb-[25px]">
            </div>

            <div class="flex items-center justify-center">
              <div
                class={`w-[70px] h-[95px] bg-no-repeat mt-[10px] mb-[68px]`}
                style="background-image: url(/seloeobit.png);"
              >
              </div>
            </div>

            <Text
              tone="default"
              class="w-full font-terciary tracking-[.1em] text-[12px] flex justify-center uppercase mb-[20px]"
            >
              Perguntas Frequentes
            </Text>

            <div class=" w-[30%] border-[2px] border-solid border-black mx-auto mb-[10px]">
            </div>

            <Text
              tone="default"
              class="w-full font-terciary tracking-[.1em] text-[12px] flex justify-center uppercase mb-[20px]"
            >
              Acompanhe Seu Pedido
            </Text>

            <div class=" w-[30%] border-[2px] border-solid border-black mx-auto mb-[10px]">
            </div>

            <Text
              tone="default"
              class="w-full font-terciary tracking-[.1em] text-[12px] flex justify-center uppercase mb-[20px]"
            >
              Precisa de troca? Saiba mais
            </Text>

            <div class=" w-[30%] border-[2px] border-solid border-black mx-auto mb-[10px]">
            </div>

            <Text
              tone="default"
              class="w-full font-terciary tracking-[.1em] text-[12px] flex justify-center uppercase mb-[20px]"
            >
              Fale conosco
            </Text>

            <div class=" w-[20%] border-[2px] border-solid border-black mx-auto mb-[10px]">
            </div>

            <Text
              tone="default"
              class="w-full font-terciary tracking-[.1em] text-[13px] flex justify-center mb-[20px]"
            >
              (51) 4002-4240 (De seg à sexta-feira das 8h às 17h30min).
            </Text>

            <div class=" w-[100%] border-[2px] border-solid border-black mx-auto mb-[20px] mt-[24px]">
            </div>

            <div class="flex justify-center mb-[20px]">
              <Text
                tone="default"
                class="font-secondary text-[12px] flex justify-center uppercase"
              >
                Redes Sociais
              </Text>
              <div
                class={`w-[22px] h-[24px] bg-no-repeat mx-[12px]`}
                style="background-image: url(/icon-sprites.png); background-position: -254px -50px;"
              >
              </div>

              <div
                class={`w-[10px] h-[24px] bg-no-repeat`}
                style="background-image: url(/icon-sprites.png); background-position: -22px 0px;"
              >
              </div>
            </div>

            <div class="flex justify-center">
              <Text
                tone="default"
                class="font-secondary text-[12px] flex justify-center uppercase mr-[40px]"
              >
                Endereço
              </Text>

              <Text
                tone="default"
                class="font-primary text-[12px] flex justify-center mb-[45px]"
              >
                Loja Virtual: Rua Antônio Frederico Ozanan, 2601,<br />{" "}
                Canoas – RS | CNPJ: 01.098.983/0163-79
              </Text>
            </div>
          </div>

          <div class="flex flex-col mx-auto px-[40px] pt-[40px] mb-[55px]">
            <Text
              tone="default"
              class="font-primary text-[12px] text-institucional font-bold flex"
            >
              Tendências em Calçados, Bolsas e Acessórios.
            </Text>
            <Text
              tone="default"
              class="font-primary text-[12px] text-institucional flex"
            >
              A Dumond é uma das marcas preferidas das mulheres contemporâneas e
              apaixonadas por moda. Inspirada nas principais tendências
              fashionistas, a marca tem um mix completo e moderno de Sapatos e
              Acessórios femininos. Para ajudar você a encontrar com facilidade
              o que procura, a Dumond organizou a Loja Virtual de um jeito
              simples. Na categoria Sapatos há variedade em Botas, Oxfords,
              Sandálias, Sapatilhas, Scarpins e Tênis. Nas sessões dedicadas a
              Bolsas e Acessórios, mulheres encontram diversos modelos de
              bolsas, carteiras, cintos e ainda Aromas Dumond.
            </Text>
          </div>

          <div class="w-full bg-black">
            <div class="flex items-center justify-center pt-[10px]">
              <Text class="font-primary text-default text-[12px] text-institucional flex">
                Uma empresa do grupo
              </Text>

              <div
                class={`w-[10px] h-[24px] bg-no-repeat`}
                style="background-image: url(/icon-sprites.png); background-position: 0px -483px;"
              >
              </div>
            </div>
          </div>

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text variant="heading-3" tone="default-inverse">
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <Text variant="body" tone="default-inverse">
                    <details>
                      <summary>
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Text>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="flex justify-between w-full">
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </Text>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
