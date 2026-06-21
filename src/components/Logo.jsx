function Logo({width = '32px', onlyIcon = false}) {
    return (
        <div className="flex items-center gap-2 select-none">
            <img src="/musenet-logo.png" alt="MuseNet Icon" style={{ width }} className="rounded" />
            {!onlyIcon && (
                <span className="font-bold text-xl tracking-tight text-white font-sans">MuseNet</span>
            )}
        </div>
    )
}

export default Logo