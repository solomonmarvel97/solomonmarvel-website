<template>
  <div
        hidden
        class="mt-[-16px] mb-[-16px] hidden"
        data-component-id="Component_2_3_2_2_1"
      >
        <form
          id="custom-scopes-dialog-form"
          class="mb-0"
        >
          <div class="my-[15px]">
            <label class="font-semibold">
              Name
            </label>
            <div
              src="/search/custom_scopes/check_name"
              required
              class="inline"
            >
              <input
                type="text"
                name="custom_scope_name"
                id="custom_scope_name"
                autoComplete="off"
                placeholder="github-ruby"
                required
                maxLength="50"
                spellCheck="false"
                class="bg-muted leading-[20px] align-middle w-[440px] max-w-full [background-position-x:calc(100%_-_8px)] [background-position-y:50%] bg-no-repeat shadow-[rgba(31,35,40,0.04)_0px_1px_0px_0px_inset] mr-[5px] px-3 py-[5px] rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-[#d1d9e0] border focus:shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] focus:[outline-style:none] focus:outline-[initial] focus:bg-[color:var(--bgColor-default,var(--color-canvas-default))] group"
              />
            </div>
          </div>
          <div class="my-[15px]">
            <label class="font-semibold">
              Query
            </label>
            <input
              type="text"
              name="custom_scope_query"
              id="custom_scope_query"
              autoComplete="off"
              placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
              required
              maxLength="500"
              class="bg-muted leading-[20px] align-middle w-[440px] max-w-full [background-position-x:calc(100%_-_8px)] [background-position-y:50%] bg-no-repeat shadow-[rgba(31,35,40,0.04)_0px_1px_0px_0px_inset] mr-[5px] px-3 py-[5px] rounded-br-[6px] rounded-t-[6px] rounded-bl-[6px] border-[#d1d9e0] border focus:shadow-[rgba(0,0,0,0)_0px_0px_0px_1px_inset] focus:[outline-style:none] focus:outline-[initial] focus:bg-[color:var(--bgColor-default,var(--color-canvas-default))] group"
            />
          </div>
          <p class="text-muted-foreground text-[12px] caret-[#59636e] my-0">
            To see all available qualifiers, see our
            <a
              href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax"
              class="text-[#0969da] underline caret-[#0969da] group"
            >
              documentation
            </a>
            .
          </p>
        </form>
      </div>
</template>
