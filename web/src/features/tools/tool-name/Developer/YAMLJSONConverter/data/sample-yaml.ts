export const sampleYAML = {
  Simple: `name: John Doe
age: 30`,
  Nested: `user:
  id: 1
  details:
    email: john@example.com
    roles:
      - admin
      - editor`,
  Kubernetes: `apiVersion: v1
kind: Pod
metadata:
  name: example-pod
spec:
  containers:
    - name: app
      image: nginx`,
} as const;
