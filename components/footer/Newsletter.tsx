import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <>
      <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
        <div class="flex flex-col gap-2 max-w-[400px]">
          <Text
            tone="default"
            class="text-center font-primary text-[20px] font-bold"
          >
            Blog Dumond
          </Text>
          <Text tone="default" class="font-primary text-[18px]">
            Fique por dentro do nosso conteúdo
          </Text>
        </div>
        <div class=" w-full border-[3px] border-solid border-black mt-[35px] mb-[45px]">
        </div>
        <Text
          variant="heading-2"
          tone="default"
          class="font-secondary text-[25px] tracking-[.2em] uppercase mr-auto"
        >
          Receba novidades
        </Text>
        <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
          <div class="flex flex-col w-full">
            <input
              class="py-2 px-3 flex-grow rounded text-[14px] text-default-inverse border-2 border-black rounded-none mb-[10px] placeholder-black font-black"
              placeholder="Nome:"
            />
            <input
              class="py-2 px-3 flex-grow rounded text-[14px] text-default-inverse border-2 border-black rounded-none mb-[10px] placeholder-black font-black"
              placeholder="Email:"
            />

            <div class="flex">
              <input
                class="py-2 px-3 flex-grow rounded text-[14px] text-default-inverse border-2 border-black rounded-none placeholder-black max-w-[168px] mr-[10px]"
                placeholder="Nº sapato:"
              />
              <button
                class="bg-interactive-inverse rounded relative font-terciary tracking-[.14em] uppercase"
                type="bgutton" // prevent form's default behavior
              >
                Enviar

                <div class="w-[67px] h-[3px] bg-black absolute top-0"></div>
                <div class="w-[23px] h-[3px] bg-black absolute bottom-0"></div>
              </button>
            </div>
          </div>
        </form>
        <div class="flex flex-col mt-[33px] mb-[67px] border-t-[5px] border-x-[5px] border-black border-solid w-full">
          <Text
            tone="default"
            class="font-secondary text-[20px] text-center uppercase tracking-[.2em] my-[15px]"
          >
            Localizador<br />
            de Loja
          </Text>
          <a href="/institucional/nossas-lojas/" class="flex px-[5%]">
            <input
              class="py-2 px-3 flex-grow rounded text-default-inverse border-2 border-black rounded-none text-[12px] placeholder-black"
              placeholder="Encontre a loja mais próxima"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
