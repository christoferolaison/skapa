FROM node:12

LABEL com.github.actions.name="Skapa release"
LABEL com.github.actions.description="Release packges to npm"
LABEL com.github.actions.icon="check"
LABEL com.github.actions.color="blue"

ADD entrypoint.sh /entrypoint.sh

CMD ["node"]
ENTRYPOINT ["/entrypoint.sh"]