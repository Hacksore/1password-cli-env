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
### Expected 
When using `turbo` it should read the secret with the [op secret reference](https://developer.1password.com/docs/cli/secret-references/) and source it into the env.

### Actual
When using `turbo` it is unable read the secret with the [op secret reference](https://developer.1password.com/docs/cli/secret-references/) and source it into the env.

# Observation

This does not happen on turbo `1.x` versions so something must have changed with `2.x`?
