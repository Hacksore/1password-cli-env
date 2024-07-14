# Turborepo and 1password CLI env bug

Something is going wrong when trying to use `op` with the `turbo` CLI so I slapped this repro together to see what gives.

✅ Working to expand vars (`pnpm without-turbo`)

```
op run --env-file .env -- pnpm start 
```

🛑 Not working to expand vars (`pnpm with-turbo`)

```
op run --env-file .env -- pnpm turbo start 
```

# Observation

This does not happen on turbo `1.x` versions so something must have changed with `2.x`?
