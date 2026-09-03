export default function DashboardHeader() {
  return (
    <header data-testid="ribbonnav" role="banner" className="sticky top-0 z-[30] w-full flex h-16 pe-3 sm:pe-4 bg-white dark:bg-[#090909] text-gray-900 dark:text-white border-b border-solid border-gray-200 dark:border-[#333] transition-colors duration-300">
      <div className="flex-shrink-0 inline-flex items-center sm:gap-x-3 px-3 sm:px-4 h-full border-r border-gray-200 sm:border-gray-200 dark:border-[#333] dark:sm:border-[#333] bg-white dark:bg-[#090909] transition-colors duration-300" style={{ width: '310px' }}>
        <div className="inline-flex items-center justify-center h-full sm:border-r border-gray-200 sm:border-gray-200 dark:border-[#333] dark:sm:border-[#333] sm:pr-4 gap-x-1 sm:gap-x-0 transition-colors duration-300">
          <a className="flex-shrink-0 flex items-center justify-center w-10 h-10 focus:outline-none" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" aria-label="Harbor" width="24" height="24" className="fill-gray-900 dark:fill-white transition-colors duration-300">
              <path d="M26.827.01c-4.596-.216-8.461 3.107-9.12 7.487-.027.203-.066.4-.099.596-1.025 5.454-5.797 9.584-11.53 9.584a11.67 11.67 0 0 1-5.634-1.442.298.298 0 0 0-.444.262v18.854h17.602V22.097c0-2.439 1.971-4.419 4.4-4.419h4.4c4.982 0 8.99-4.15 8.795-9.197C35.02 3.937 31.35.226 26.827.01Z"></path>
            </svg>
          </a>
        </div>
        <div className="w-full inline-flex items-center space-x-2">
          <div className="inline-flex relative items-center h-auto">
            <button data-testid="workspace-switcher" type="button" className="h-10 focus:outline-none flex items-center p-1.5 bg-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors rounded-none" style={{ maxWidth: '240px' }}>
              <div className="flex items-center space-x-2.5 h-10 text-[15px] overflow-x-hidden">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 text-[15px] font-semibold leading-none rounded-none capitalize bg-green-100 text-green-700">M</span>
                <span className="truncate" title="My Workspace">My Workspace</span>
                <svg fill="currentColor" aria-hidden="true" className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14L4.5 10.5L5.205 9.795L8 12.585L10.795 9.795L11.5 10.5L8 14Z"></path>
                  <path d="M8 2L11.5 5.5L10.795 6.205L8 3.415L5.205 6.205L4.5 5.5L8 2Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:ps-6 border-r border-gray-200 sm:border-e sm:border-solid sm:border-gray-200 dark:border-[#333] dark:sm:border-[#333] flex-grow h-full flex items-center transition-colors duration-300">
        <div className="flex-grow flex items-center justify-between">
          <nav>
            <ol className="flex m-0 p-0">
              <li className="inline-flex items-center text-[15px]">
                <span className="text-gray-900 dark:text-white flex items-center space-x-2.5 focus:outline-none text-[15px] transition-colors duration-300" aria-current="page">
                  <svg fill="currentColor" className="shrink-0" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.65 2.45L8.4 1.1C8.25 1.05 8.15 1 8 1C7.85 1 7.75 1.05 7.65 1.1L5.4 2.45C5.15 2.6 5 2.85 5 3.1V5.9C5 6.15 5.15 6.4 5.35 6.55L7.6 7.9C7.7 7.95 7.85 8 7.95 8C8.05 8 8.2 7.95 8.3 7.9L10.55 6.55C10.75 6.4 10.9 6.2 10.9 5.9V3.1C11 2.85 10.85 2.6 10.65 2.45ZM10 5.75L8 6.95L6 5.75V3.25L8 2.05L10 3.25V5.75Z"></path>
                    <path d="M14.65 9.45L12.4 8.1C12.25 8.05 12.15 8 12 8C11.85 8 11.75 8.05 11.65 8.1L9.4 9.45C9.2 9.6 9.05 9.8 9.05 10.1V12.9C9.05 13.15 9.2 13.4 9.4 13.55L11.65 14.9C11.75 14.95 11.9 15 12 15C12.1 15 12.25 14.95 12.35 14.9L14.6 13.55C14.8 13.4 14.95 13.2 14.95 12.9V10.1C15 9.85 14.85 9.6 14.65 9.45ZM14 12.75L12 13.95L10 12.75V10.25L12 9.05L14 10.25V12.75Z"></path>
                    <path d="M6.65 9.45L4.4 8.1C4.25 8.05 4.15 8 4 8C3.85 8 3.75 8.05 3.65 8.1L1.4 9.45C1.15 9.6 1 9.85 1 10.1V12.9C1 13.15 1.15 13.4 1.35 13.55L3.6 14.9C3.75 14.95 3.85 15 4 15C4.15 15 4.25 14.95 4.35 14.9L6.6 13.55C6.8 13.4 6.95 13.2 6.95 12.9V10.1C7 9.85 6.85 9.6 6.65 9.45ZM6 12.75L4 13.95L2 12.75V10.25L4 9.05L6 10.25V12.75Z"></path>
                  </svg>
                  <span>
                    <span className="whitespace-nowrap sm:text-wrap">Projects</span>
                  </span>
                </span>
              </li>
            </ol>
          </nav>
          <div className="me-4">
            <button type="button" className="text-[15px] font-medium text-gray-500 dark:text-[#a1a1aa] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white transition-colors h-9 py-1.5 px-3 focus:outline-none items-center hidden sm:flex group/button rounded-none">
              <div className="inline-flex w-[18px] h-[18px] me-2">
                <svg fill="currentColor" aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 13.7931L10.7239 10.017C11.6313 8.9277 12.0838 7.5305 11.9872 6.11608C11.8907 4.70165 11.2525 3.37891 10.2055 2.423C9.15855 1.4671 7.78335 0.951637 6.366 0.983845C4.94865 1.01605 3.59828 1.59345 2.59581 2.59593C1.59333 3.5984 1.01593 4.94877 0.983723 6.36612C0.951515 7.78347 1.46698 9.15867 2.42288 10.2057C3.37879 11.2526 4.70153 11.8908 6.11596 11.9873C7.53038 12.0839 8.92758 11.6314 10.0169 10.7241L13.7929 14.5001L14.5 13.7931ZM2 6.50012C2 5.6101 2.26392 4.74007 2.75838 4.00005C3.25285 3.26003 3.95565 2.68325 4.77792 2.34266C5.60019 2.00207 6.50499 1.91295 7.3779 2.08658C8.25082 2.26022 9.05264 2.6888 9.68198 3.31814C10.3113 3.94747 10.7399 4.7493 10.9135 5.62221C11.0872 6.49513 10.998 7.39993 10.6575 8.22219C10.3169 9.04446 9.74008 9.74726 9.00006 10.2417C8.26004 10.7362 7.39001 11.0001 6.5 11.0001C5.30693 10.9988 4.1631 10.5243 3.31948 9.68064C2.47585 8.83701 2.00132 7.69319 2 6.50012Z"></path>
                </svg>
              </div>
              Search
              <kbd className="inline-flex items-center space-x-1 px-1 py-0.5 h-[22px] w-fit text-[12px] font-mono font-medium leading-none text-gray-500 dark:text-[#a1a1aa] bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333] ms-2.5 rounded-none transition-colors duration-300">
                <svg aria-hidden="true" width="8" height="5" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M0.564 3.72L3.132 0.42H4.08L6.636 3.72H5.568L3.612 1.296H3.588L1.644 3.72H0.564Z"></path>
                </svg>
                <span className="sr-only">Ctrl</span>
                <span className="sr-only">+</span>
                <span aria-hidden="true" className="select-none">K</span>
                <span className="sr-only">K</span>
              </kbd>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center sm:ps-4 sm:gap-2.5 pr-5">
        <div className="inline-flex relative h-full items-center">
          <button type="button" className="text-[15px] font-medium text-gray-500 dark:text-[#a1a1aa] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white border border-solid border-gray-200 dark:border-[#333] transition-colors h-9 py-1.5 px-3 focus:outline-none flex items-center rounded-none">
            <div className="flex gap-1.5 flex-row items-center">
              <svg fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 7.5V2.5H7.5V7.5H2.5V8.5H7.5V13.5H8.5V8.5H13.5V7.5H8.5Z"></path>
              </svg>
              <span>New</span>
            </div>
          </button>
        </div>
        <div className="inline-flex relative h-full items-center">
          <button type="button" className="text-[15px] font-medium text-gray-500 dark:text-[#a1a1aa] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white border border-solid border-gray-200 dark:border-[#333] transition-colors h-9 py-1.5 px-3 focus:outline-none flex items-center rounded-none">
            <div className="flex gap-1.5 flex-row items-center">
              <svg fill="currentColor" className="w-[18px] h-[18px]" aria-hidden="true" width="18" height="19" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.80502 15.4719C5.7027 15.4287 5.61767 15.3527 5.56335 15.2558C5.50902 15.1589 5.4885 15.0467 5.50502 14.9369L6.41502 9.0119H4.00002C3.92346 9.01396 3.84744 8.9984 3.77785 8.96643C3.70825 8.93446 3.64693 8.88692 3.59861 8.82749C3.5503 8.76806 3.51628 8.69833 3.49918 8.62367C3.48209 8.54902 3.48238 8.47143 3.50002 8.3969L5.00002 1.8969C5.02641 1.78503 5.09054 1.68568 5.18161 1.61555C5.27268 1.54543 5.38512 1.50883 5.50002 1.5119H10.5C10.5747 1.51164 10.6485 1.52813 10.716 1.56014C10.7835 1.59216 10.843 1.63889 10.89 1.6969C10.9377 1.75556 10.9715 1.82429 10.9889 1.89791C11.0062 1.97152 11.0066 2.04811 10.99 2.1219L10.125 6.0119H12.5C12.5937 6.01171 12.6856 6.03786 12.7652 6.08737C12.8447 6.13688 12.9088 6.20775 12.95 6.2919C12.9858 6.37267 12.9996 6.46149 12.99 6.54932C12.9803 6.63715 12.9475 6.72085 12.895 6.7919L6.39502 15.2919C6.35109 15.357 6.29243 15.4109 6.22381 15.4491C6.15518 15.4873 6.07851 15.5088 6.00002 15.5119C5.93312 15.5106 5.86701 15.4971 5.80502 15.4719ZM8.87502 7.0119L9.87502 2.5119H5.90002L4.63002 8.0119H7.58502L6.79002 13.1519L11.5 7.0119H8.87502Z"></path>
              </svg>
              <span>Upgrade</span>
            </div>
          </button>
        </div>
        <div className="inline-flex relative h-full items-center">
          <button type="button" className="text-[15px] font-medium text-gray-500 dark:text-[#a1a1aa] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white border border-solid border-gray-200 dark:border-[#333] transition-colors h-9 py-1.5 px-3 focus:outline-none flex items-center rounded-none">
            <svg fill="currentColor" aria-label="Help" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C14 9.5913 13.3679 11.1174 12.2426 12.2426C11.1174 13.3679 9.5913 14 8 14Z"></path>
              <path d="M8 12.5C8.41422 12.5 8.75 12.1642 8.75 11.75C8.75 11.3358 8.41422 11 8 11C7.58579 11 7.25 11.3358 7.25 11.75C7.25 12.1642 7.58579 12.5 8 12.5Z"></path>
              <path d="M8.5 4H7.75C7.45434 3.99934 7.16147 4.05709 6.88819 4.16993C6.61491 4.28277 6.36661 4.44848 6.15754 4.65754C5.94848 4.8666 5.78277 5.1149 5.66993 5.38818C5.55709 5.66146 5.49934 5.95434 5.5 6.25V6.5H6.5V6.25C6.5 5.91848 6.6317 5.60054 6.86612 5.36612C7.10054 5.1317 7.41848 5 7.75 5H8.5C8.83152 5 9.14947 5.1317 9.38389 5.36612C9.61831 5.60054 9.75 5.91848 9.75 6.25C9.75 6.58152 9.61831 6.89946 9.38389 7.13388C9.14947 7.3683 8.83152 7.5 8.5 7.5H7.5V9.75H8.5V8.5C9.09674 8.5 9.66904 8.26295 10.091 7.84099C10.5129 7.41903 10.75 6.84674 10.75 6.25C10.75 5.65326 10.5129 5.08097 10.091 4.65901C9.66904 4.23705 9.09674 4 8.5 4Z"></path>
            </svg>
          </button>
        </div>
        <div className="inline-flex relative h-full items-center">
          <button type="button" className="text-[15px] font-medium text-gray-500 dark:text-[#a1a1aa] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-gray-900 dark:hover:text-white transition-colors h-9 py-1.5 px-3 focus:outline-none flex items-center rounded-none">
            <span className="max-w-full inline-flex items-center flex-shrink-0 space-x-1">
              <span className="flex-shrink-0 flex items-center justify-center w-[22px] h-[22px] text-[12px] font-semibold leading-none rounded-none capitalize bg-yellow-100 text-yellow-700">S</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
