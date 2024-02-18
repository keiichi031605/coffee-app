# README

### description ###
Rails 7.0 API with React.js app.
1. `rails new coffee-app --api --skip-test -T --database=postgresql -j=esbuild`
2. `npx create-react-app react-web-app`
- (referred: https://www.youtube.com/watch?v=sh4WrNGDvQM&list=PLffm_7JPQNQxCCJ6-CfAByc0V_t6KWXDv&index=14)
- (referred: https://sdrmike.medium.com/rails-7-api-only-app-with-devise-and-jwt-for-authentication-1397211fb97c)

### ruby gems ###
- `rack-cors` for CORS
- `devise` for authentication
- `devise-jwt` for jwt generation to manage authentication
- `jsonapi-serializer` for json response
- `annotate` (run `bundle exec annotate --models`) for model file annotation

### react libraries ###
- `Axios`
- `react-router-dom`
- `@mui/material @emotion/react @emotion/styled`


<img width="1425" alt="Screenshot 2023-08-12 at 9 49 22 pm" src="https://github.com/keiichi031605/coffee-app/assets/58890575/27c3a846-964e-4cc8-98be-900f3d12cba2">


