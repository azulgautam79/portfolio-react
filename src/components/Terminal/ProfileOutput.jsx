export const ProfileOutput = ({
    name,
    role,
    status,
}) => {
    return (
        <div className="my-4 rounded-xl border border-primary/10 bg-primary/[0.03] p-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                    LG
                </div>

                <div>
                    <h3 className="font-semibold">
                        {name}
                    </h3>

                    <p className="text-xs text-muted-foreground">
                        {role}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                <span className="text-muted-foreground">
                    {status}
                </span>
            </div>
        </div>
    );
};