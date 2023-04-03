export const Loader = ({ className = 'w-5 h-5 text-primary' }) => {
  return (
    <div
      class={`animate-spin inline-block border-[2px] border-current border-t-transparent rounded-full ${className}`}
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  )
}
